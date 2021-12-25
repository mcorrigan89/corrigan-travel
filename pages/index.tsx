import type { NextPage } from 'next'
import styled from 'styled-components'
import { Header } from '../components/Header';
import { siteMap } from '../data/sitemap';

const StyledDiv = styled.div`
  border: 1px ${props => props.theme.colors.main} solid;
  padding: 32px;
`

const Home: NextPage = () => {
  return (
    <div>Main Page</div>
  )
}

export default Home
