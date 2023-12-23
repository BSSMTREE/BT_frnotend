import * as S from "./style";
import arrow from "assets/arrow.svg";

interface IListProps {
  setIsOpenList: React.Dispatch<React.SetStateAction<boolean>>;
}

function List({ setIsOpenList }: IListProps) {
  const data = [
    {
      writer: "전영현",
      recipient: "한태영",
      detail: "배고프다",
    },
  ];
  return (
    <S.List>
      <S.NameLayout>
        <div>
          <S.ToFrom>From.</S.ToFrom>
          <S.Name>{data[0].writer}</S.Name>
        </div>
        <S.Arrow src={arrow} />
        <div>
          <S.ToFrom>To.</S.ToFrom>
          <S.Name>{data[0].recipient}</S.Name>
        </div>
      </S.NameLayout>
      <S.Message>{data[0].detail}</S.Message>
      <S.Cancel type="button" onClick={() => setIsOpenList(false)}>
        이전
      </S.Cancel>
    </S.List>
  );
}

export default List;
