import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) { 
  console.log(propriedades);  
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}></img> 
    </Box>
  )
}

export default function Home() {
  const githubUser = 'barbarakogus';
  const nomePerfil = 'Barbara Kogus';
  const pessoasFavoritas = [
    'thiagodsti',
    'thiagoalmeidasa',
    'castrodrigo',
    'matthaus',
    'juunegreiros',
    'omariosouto'
  ]
  
  return (
    <> 
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>  
          <ProfileSidebar githubUser={githubUser}></ProfileSidebar>
        </div>  
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo (a), {nomePerfil}
            </h1>
            <OrkutNostalgicIconSet>
            </OrkutNostalgicIconSet> 
          </Box>
        </div> 
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`}></img>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul> 
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </> 
  )
}

 
