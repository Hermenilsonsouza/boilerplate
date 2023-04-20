import * as S from './styles'

const Main = ({ title = 'Boilerplate Next.js' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
