import * as S from "./style";

interface IWriteProps {
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
}

function Write({ setIsOpenWrite }: IWriteProps) {
  return (
    <S.Write>
      <S.ToFrom>To.</S.ToFrom>
      <S.Name placeholder="보낼 사람(최대 8글자)"></S.Name>
      <S.ToFrom>From.</S.ToFrom>
      <S.Name placeholder="닉네임(최대 8글자)"></S.Name>
      <S.Message placeholder="따듯한 메세지를 적어주세요." />
      <S.ButtonLayout>
        <S.Cancel type="button" onClick={() => setIsOpenWrite(false)}>
          이전
        </S.Cancel>
        <S.Submit type="submit">메세지 남기기</S.Submit>
      </S.ButtonLayout>
    </S.Write>
  );
}

export default Write;
