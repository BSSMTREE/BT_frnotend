import Write from "components/Write";
import * as S from "./style";
import tree from "assets/tree.svg";
import leftArrow from "assets/pageLeftArrow.svg";
import rightArrow from "assets/pageRightArrow.svg";
import { useEffect, useState } from "react";
import List from "components/List";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bring } from "apis/bring";
import IDataProps from "interfaces/IDataProps";
import { decorationList } from "assets/data/decorationList";

function App() {
  const date = new Date();
  const [isOpenWrite, setIsOpenWrite] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSlice, setPageSlice] = useState([0, 0]);
  const [data, setData] = useState<IDataProps[]>([]);

  const handleIncreasePageClick = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const handleDecreasePageClick = () => {
    if (currentPage !== Math.ceil(data.length / 10))
      setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentPage === Math.ceil(data.length / 10)) {
      setPageSlice([(currentPage - 1) * 10, data.length]);
      return;
    }
    setPageSlice([(currentPage - 1) * 10, currentPage * 10]);
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await bring();
        setData(res);
      } catch {
        toast.error("데이터 정보를 받아오지 못하였습니다!");
      }
    };
    getData();
  }, []);

  return (
    <>
      <S.Layout>
        <S.Header isModalopen={isOpenWrite || isOpenList}>BSSMTREE</S.Header>
        <S.TextLayout isModalopen={isOpenWrite || isOpenList}>
          <S.MainText>
            <br />
            현재 <S.Count>{data.length}</S.Count>개의 편지가 쌓여있어요
            <br />
            <br />
            {date.getMonth() === 11 &&
            date.getDate() >= 20 &&
            date.getDate() <= 25 ? (
              <S.SubText>
                트리를 눌러 편지를 써주세요!
                <br />
                트리 속 편지는 12월 26일에 공개되요.
              </S.SubText>
            ) : (
              <S.SubText>
                트리 속 편지가 열렸어요!
                <br />
                트리를 눌러 트리 속 편지를 확인할 수 있어요.
              </S.SubText>
            )}
          </S.MainText>
        </S.TextLayout>
        <S.TreeContainer>
          <S.LeftArrow onClick={handleIncreasePageClick} src={leftArrow} />
          <S.Tree
            isModalopen={isOpenWrite || isOpenList}
            src={tree}
            onClick={() => {
              if (
                date.getMonth() === 11 &&
                date.getDate() >= 20 &&
                date.getDate() <= 25
              )
                setIsOpenWrite(true);
              else setIsOpenList(true);
            }}
          />
          {data.slice(pageSlice[0], pageSlice[1]).map((_, i) => (
            <S.TreeItem
              index={i + 1}
              src={
                decorationList[
                  Math.round(Math.random() * decorationList.length)
                ]
              }
            />
          ))}
          <S.RightArrow onClick={handleDecreasePageClick} src={rightArrow} />
        </S.TreeContainer>
        {(isOpenWrite || isOpenList) && <S.Dark />}
        {isOpenWrite && <Write setIsOpenWrite={setIsOpenWrite} />}
        {isOpenList && <List setIsOpenList={setIsOpenList} data={data} />}
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default App;
