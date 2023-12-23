import { useState } from "react";
import * as S from "./style";
import arrow from "assets/rightArrow1.svg";
import leftArrow from "assets/leftArrow.svg";
import rightArrow from "assets/rightArrow2.svg";
import IDataProps from "interfaces/IDataProps";

interface IListProps {
  setIsOpenList: React.Dispatch<React.SetStateAction<boolean>>;
  data: IDataProps[];
}

function List({ setIsOpenList, data }: IListProps) {
  const [page, setPage] = useState(0);
  return (
    <S.Layout>
      <S.LeftArrow
        src={leftArrow}
        onClick={() => setPage(page - 1)}
        page={page}
      />
      <S.List>
        <S.NameLayout>
          <div>
            <S.ToFrom>From.</S.ToFrom>
            <S.Name>{data[page].writer}</S.Name>
          </div>
          <S.Arrow src={arrow} />
          <div>
            <S.ToFrom>To.</S.ToFrom>
            <S.Name>{data[page].recipient}</S.Name>
          </div>
        </S.NameLayout>
        <S.Message>{data[page].detail}</S.Message>
        <S.Cancel type="button" onClick={() => setIsOpenList(false)}>
          나가기
        </S.Cancel>
      </S.List>
      <S.RightArrow
        src={rightArrow}
        onClick={() => setPage(page + 1)}
        page={page}
        length={data.length}
      />
    </S.Layout>
  );
}

export default List;
