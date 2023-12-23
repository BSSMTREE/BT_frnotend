import { useState } from "react";
import * as S from "./style";
import arrow from "assets/rightArrow1.svg";
import { toast } from "react-toastify";
import { letter } from "apis/letter";

interface IWriteProps {
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
}

function Write({ setIsOpenWrite }: IWriteProps) {
  const [writer, setWriter] = useState("");
  const [recipient, setRecipient] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (writer === "" || recipient === "" || detail === "")
      return toast.error("모든 필수 내용들을 입력해주세요!");
    try {
      await letter(writer, recipient, detail);
      toast.success("성공적으로 편지를 전송했어요!");
      setIsOpenWrite(false);
    } catch {
      toast.error("편지를 발송하지 못하였습니다!");
    }
  };
  return (
    <S.Write onSubmit={handleSubmit}>
      <S.NameLayout>
        <div>
          <S.ToFrom>From.</S.ToFrom>
          <S.Name
            placeholder="닉네임"
            onChange={(e) => setWriter(e.currentTarget.value)}
          ></S.Name>
        </div>
        <S.Arrow src={arrow} />
        <div>
          <S.ToFrom>To.</S.ToFrom>
          <S.Name
            placeholder="받는사람"
            onChange={(e) => setRecipient(e.currentTarget.value)}
          ></S.Name>
        </div>
      </S.NameLayout>

      <S.Message
        placeholder="따듯한 메세지를 적어주세요."
        onChange={(e) => setDetail(e.currentTarget.value)}
      />
      <S.ButtonLayout>
        <S.Cancel type="button" onClick={() => setIsOpenWrite(false)}>
          이전
        </S.Cancel>
        <S.Submit type="submit">편지 남기기</S.Submit>
      </S.ButtonLayout>
    </S.Write>
  );
}

export default Write;
