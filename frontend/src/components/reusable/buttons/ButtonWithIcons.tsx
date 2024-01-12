import { ButtonWrapper } from './buttons.styled';

interface Props {
  icon: string;
  text: string;
}
export default function ButtonWithIcon({ text, icon }: Props) {
  return (
    <ButtonWrapper>
      <img src={icon} alt={text} />
      <span>{text}</span>
    </ButtonWrapper>
  );
}
