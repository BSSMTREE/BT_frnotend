import Write from "components/Write";
import * as S from "./style";
import tree from "assets/tree.svg";
import { useEffect, useState } from "react";
import List from "components/List";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { bring } from "apis/bring";
import IDataProps from "interfaces/IDataProps";

function App() {
  const date = new Date();
  const [isOpenWrite, setIsOpenWrite] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const [data, setData] = useState<IDataProps[]>([
    { writer: "", recipient: "", detail: "" },
  ]);

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
            <S.SubText>
              트리를 눌러 편지를 써주세요!
              <br />
              트리 속 편지는 12월 26일에 공개돼요.
            </S.SubText>
          </S.MainText>
        </S.TextLayout>
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
        {(isOpenWrite || isOpenList) && <S.Dark />}
        {isOpenWrite && <Write setIsOpenWrite={setIsOpenWrite} />}
        {isOpenList && <List setIsOpenList={setIsOpenList} data={data} />}
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default App;
