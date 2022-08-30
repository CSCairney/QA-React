import logo from './logo.svg';
import './App.css';

function App() {

    const code = {
      Java: "Java",
      Git: "Git",
      MySQL: "MySQL",
      Jira: "Jira",
      Maven: "Maven",
      Junit: "Junit",
      Mockito: "Mockito",
      Eclipse: "Eclipse",
      HTML: "HTML"

    }

  return (
    
    <div className="App">
      <header className="App-header">
      <div Style="margin:5%; background-color: rgba(67, 85, 90, 0.075);">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Skill Name</th>
                      <th scope="col">Area</th>
                      <th scope="col">Experience (Yrs)</th>
                      <th scope="col">Logo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{code.Java}</td>
                      <td>Backend</td>
                      <td>less than 1</td>
                      <td><img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="JAVA" width="50px"
                        height="50px"></img></td>

                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>{code.Git}</td>
                      <td>Version Control</td>
                      <td>less than 1</td>
                      <td><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git"
                        width="50px" height="50px"></img></td>


                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>{code.MySQL}</td>
                      <td>Database</td>
                      <td>less than 1</td>
                      <td><img src="https://icons-for-free.com/iconfiles/png/512/development+logo+mysql+icon-1320184807686758112.png"
                        alt="MySQL" width="50px" height="50px"></img></td>


                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>{code.Jira}</td>
                      <td>Agile Project Management</td>
                      <td>less than 1</td>
                      <td><img src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" alt="Jira" width="50px"
                        height="50px"></img></td>


                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>{code.Maven}</td>
                      <td>Backend</td>
                      <td>less than 1</td>
                      <td><img src="./Images/mavenlogo.png" alt="maven logo" width="50px" height="50px"></img></td>


                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>{code.Junit}</td>
                      <td>Backend</td>
                      <td>less than 1</td>
                      <td><img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_5b9d2c5176ad8f918a0ad84241ab9673/junit.png" alt="Junit" width="50px"
                        height="50px"></img></td>


                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>{code.Mockito}</td>
                      <td>Backend</td>
                      <td>less than 1</td>
                      <td><img src="./Images/mockito.png" alt="Mockito Logo" width="50px"
                        height="50px"></img></td>


                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>{code.Eclipse}</td>
                      <td>IDE</td>
                      <td>less than 1</td>
                      <td><img src="./Images/exclipse logo.png" alt="Eclipse Logo" width="50px"
                        height="50px"></img></td>


                    </tr>
                    
                    <tr>
                      <th scope="row">10</th>
                      <td>{code.HTML}</td>
                      <td>Frontend</td>
                      <td>less than 1</td>
                      <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="HTML Logo" width="50px"
                        height="50px"></img></td>



                    </tr>
                  </tbody>
                </table>
              </div>
      </header>
    </div>
  );
}

export default App;
