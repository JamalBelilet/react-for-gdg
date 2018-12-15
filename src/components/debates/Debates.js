import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Debates.css'
import Debate from '../debate/Debate'

export default class Debates extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      debates: [
        {
          title: "Incididunt nisi ea sit excepteur labore adipisicing exercitation eu cillum cupidatat.", 
          ideas: [
            {
                username: "Jamal 😎",
                idea: "I think robots will never create a pure random experience",
                args: "Officia consequat velit proident cillum ea eiusmod veniam commodo nulla 🙄  sunt quis excepteur ipsum. Elit labore ex 😜 commodo magna."
            },
            {
                username:"Loya 😤" ,
                idea:"Sint aliqua ipsum mollit non consequat",
                args:"Voluptate ullamco et exercitation enim anim consectetur."
            },
            {
                username: "Mey" ,
                idea: "Ullamco elit eiusmod quis in aliqua.",
                args: "Do tempor eu sit aute 😈 consequat aliqua pariatur amet elit cupidatat."
            },
            {
                username: "Mohamed" ,
                idea: "Voluptate ea dolor elit id",
                args: "Pariatur sit eu fugiat consectetur pariatur laboris laborum dolore ea."
            },
            {
                username: "Tama 😅" ,
                idea: "Ut adipisicing ut 🙃 occaecat officia culpa ea",
                args: "In ex labore in ex elit ad consectetur nisi elit mollit labore eu est. Deserunt culpa ex pariatur incididunt ex quis irure nostrud eu magna. "
            },
            {
                username: "Est" ,
                idea: "Eiusmod non irure ullamco deserunt mollit minim",
                args: "Adipisicing eu commodo ea ea minim esse anim. Voluptate anim esse ut do sint in eiusmod reprehenderit enim."
            },
            {
                username: "Duis 😳" ,
                idea: "Magna velit elit officia irure dolor et excepteur veniam",
                args: "Voluptate consectetur 😲 consequat nostrud minim elit id. Proident dolor dolore cupidatat ea."
            },
            {
                username: "Commodo" ,
                idea: "Qui ullamco consequat",
                args: "Eiusmod labore id exercitation in. Esse enim aute dolore enim eu in commodo."
            }
        ] ,
        },
        {
          title: "Cupidatat qui id ea sit velit dolor esse nulla non consequat eu labore.",
          ideas: [
            {
                username: "Mohamed" ,
                idea: "Voluptate ea dolor elit id",
                args: "Pariatur sit eu fugiat consectetur pariatur laboris laborum dolore ea."
            },
            {
                username: "Tama 😅" ,
                idea: "Ut adipisicing ut 🙃 occaecat officia culpa ea",
                args: "In ex labore in ex elit ad consectetur nisi elit mollit labore eu est. Deserunt culpa ex pariatur incididunt ex quis irure nostrud eu magna. "
            },
            {
                username: "Est" ,
                idea: "Eiusmod non irure ullamco deserunt mollit minim",
                args: "Adipisicing eu commodo ea ea minim esse anim. Voluptate anim esse ut do sint in eiusmod reprehenderit enim."
            },
            {
                username: "Duis 😳" ,
                idea: "Magna velit elit officia irure dolor et excepteur veniam",
                args: "Voluptate consectetur 😲 consequat nostrud minim elit id. Proident dolor dolore cupidatat ea."
            },
            {
                username: "Commodo" ,
                idea: "Qui ullamco consequat",
                args: "Eiusmod labore id exercitation in. Esse enim aute dolore enim eu in commodo."
            }
        ] ,
        },
        {
          title: "Commodo ullamco labore commodo nostrud laboris cupidatat proident proident est nisi nulla ad.", ideas: [
            {
                username: "Tama 😅" ,
                idea: "Ut adipisicing ut 🙃 occaecat officia culpa ea",
                args: "In ex labore in ex elit ad consectetur nisi elit mollit labore eu est. Deserunt culpa ex pariatur incididunt ex quis irure nostrud eu magna. "
            },
            {
                username: "Est" ,
                idea: "Eiusmod non irure ullamco deserunt mollit minim",
                args: "Adipisicing eu commodo ea ea minim esse anim. Voluptate anim esse ut do sint in eiusmod reprehenderit enim."
            },
            {
                username: "Duis 😳" ,
                idea: "Magna velit elit officia irure dolor et excepteur veniam",
                args: "Voluptate consectetur 😲 consequat nostrud minim elit id. Proident dolor dolore cupidatat ea."
            },
            {
                username: "Commodo" ,
                idea: "Qui ullamco consequat",
                args: "Eiusmod labore id exercitation in. Esse enim aute dolore enim eu in commodo."
            }
        ] ,
        }
        ,
        {
          title: "Aliqua eiusmod officia eiusmod eu ipsum.", ideas: [
            {
                username: "Commodo" ,
                idea: "Qui ullamco consequat",
                args: "Eiusmod labore id exercitation in. Esse enim aute dolore enim eu in commodo."
            }
        ] ,
        }
        ,
        {
          title: "Et labore id aute incididunt.", ideas: [
            
            {
                username: "Mey" ,
                idea: "Ullamco elit eiusmod quis in aliqua.",
                args: "Do tempor eu sit aute 😈 consequat aliqua pariatur amet elit cupidatat."
            },
            {
                username: "Mohamed" ,
                idea: "Voluptate ea dolor elit id",
                args: "Pariatur sit eu fugiat consectetur pariatur laboris laborum dolore ea."
            }
        ] ,
        }
        ,
        {
          title: "Fugiat veniam mollit in mollit eiusmod tempor proident aliquip consequat ullamco velit est nostrud nulla.", ideas: [
            {
                username: "Tama 😅" ,
                idea: "Ut adipisicing ut 🙃 occaecat officia culpa ea",
                args: "In ex labore in ex elit ad consectetur nisi elit mollit labore eu est. Deserunt culpa ex pariatur incididunt ex quis irure nostrud eu magna. "
            },
            {
                username: "Est" ,
                idea: "Eiusmod non irure ullamco deserunt mollit minim",
                args: "Adipisicing eu commodo ea ea minim esse anim. Voluptate anim esse ut do sint in eiusmod reprehenderit enim."
            },
            {
                username: "Duis 😳" ,
                idea: "Magna velit elit officia irure dolor et excepteur veniam",
                args: "Voluptate consectetur 😲 consequat nostrud minim elit id. Proident dolor dolore cupidatat ea."
            }
        ] ,
        }
        ,
        {
          title: "Esse nulla quis culpa laborum.", ideas: [
            {
                username: "Jamal 😎",
                idea: "I think robots will never create a pure random experience",
                args: "Officia consequat velit proident cillum ea eiusmod veniam commodo nulla 🙄  sunt quis excepteur ipsum. Elit labore ex 😜 commodo magna."
            },
            {
                username:"Loya 😤" ,
                idea:"Sint aliqua ipsum mollit non consequat",
                args:"Voluptate ullamco et exercitation enim anim consectetur."
            },
            {
                username: "Mey" ,
                idea: "Ullamco elit eiusmod quis in aliqua.",
                args: "Do tempor eu sit aute 😈 consequat aliqua pariatur amet elit cupidatat."
            },
            {
                username: "Mohamed" ,
                idea: "Voluptate ea dolor elit id",
                args: "Pariatur sit eu fugiat consectetur pariatur laboris laborum dolore ea."
            },
            {
                username: "Tama 😅" ,
                idea: "Ut adipisicing ut 🙃 occaecat officia culpa ea",
                args: "In ex labore in ex elit ad consectetur nisi elit mollit labore eu est. Deserunt culpa ex pariatur incididunt ex quis irure nostrud eu magna. "
            },
            {
                username: "Est" ,
                idea: "Eiusmod non irure ullamco deserunt mollit minim",
                args: "Adipisicing eu commodo ea ea minim esse anim. Voluptate anim esse ut do sint in eiusmod reprehenderit enim."
            },
            {
                username: "Duis 😳" ,
                idea: "Magna velit elit officia irure dolor et excepteur veniam",
                args: "Voluptate consectetur 😲 consequat nostrud minim elit id. Proident dolor dolore cupidatat ea."
            },
            {
                username: "Commodo" ,
                idea: "Qui ullamco consequat",
                args: "Eiusmod labore id exercitation in. Esse enim aute dolore enim eu in commodo."
            }
        ] ,
        }
      ]
    }
  }

  handleClick = () => {
    if( this.state.debates.length > this.state.counter + 3 )
      this.setState({counter: this.state.counter + 3})
    else 
      this.setState({counter: 0})

  }

  render() {
    return (
      <div className="debates">
        {
          this.state.debates.map((debate, idx) => (
            idx >= this.state.counter
            &&  idx < this.state.counter + 3
                ? <Link style={{textDecoration: 'none'}} to={{
                    pathname: `/d/${idx}`,
                    query: {...debate, idx}
                }}><Debate debate={debate} idx={idx}/></Link>
                : undefined
          ))
        }

        <button className="more"  onClick={this.handleClick}>
          {
            this.state.debates.length > this.state.counter + 3
              ? 'more... 😋 '
              : 'reload... 🤗'
          }
        </button>
      </div>
    )
  }
}
