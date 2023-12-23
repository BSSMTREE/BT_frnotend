import Write from "components/Write";
import * as S from "./style";
import tree from "assets/tree.svg";
import { useState } from "react";
import List from "components/List";

function App() {
  const [isOpenWrite, setIsOpenWrite] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  return (
    <S.Layout>
      <S.Header isModalopen={isOpenWrite || isOpenList}>BSSMTREE</S.Header>
      <S.TextLayout isModalopen={isOpenWrite || isOpenList}>
        <S.MainText>
          부산소프트웨어마이스터고의 트리에요
          <br />
          현재 <S.Count>0</S.Count>개의 편지가 쌓여있어요
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
        onClick={() => setIsOpenWrite(true)}
      />
      {isOpenWrite && <Write setIsOpenWrite={setIsOpenWrite} />}
      {isOpenList && <List />}
    </S.Layout>
  );
}

export default App;
