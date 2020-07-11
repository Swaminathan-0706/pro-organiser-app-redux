import React, { Component } from 'react';
import styles from './Home.module.scss';
import {connect} from 'react-redux';
import {getBoards} from '../../Redux/Actions/ActionCreatorHome';
import { Link } from "react-router-dom";
import Loader from '../Modals/Loader/Loader';


 class Home extends Component {     
        constructor(props) {
            super(props)
        
            this.state = {
                 loading:false,
                 boardData:[]
            }
        }
        
     componentDidMount(){
         console.log("didmount");
         this.props.fetchData();
         setTimeout(() => {
            console.log(this.props);
         }, 3000);
         
        //  this.setState({
        //      loading:this.props.loading,
        //      boardData:this.props.boardData

        //  })
     }

    render() {
        console.log("Render");
        return (
            <>
      {this.state.loading ? (
        <Loader />
      ) : (
        <>
          <p className={styles.para}>Boards</p>
          {this.state.boardData=== null&& (
            <p className={styles.emptyMsg}>
              You haven't created any boards.Kindly click on the 'Create Board'
              button in the navigation bar to create a board.
            </p>
          )}

          <div className={styles.ctrBoard}>
            {this.state.boardData.map((x) => (
              <Link
                className={styles.btnBoard}
                to={{
                  pathname: `/board/${x.id}`,
                  state: {
                    id: x.id,
                    boardName: x.boardName,
                    teamMembers: x.teamMembers,
                  },
                }}
                key={x.id}
              >
                {x.boardName}
                <div className={styles.txt}></div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
        )
    }
}
const mapStateToProps=state=>{
    return{
        boardData:state.boardData,
        loading:state.loading
    };

}
const mapDispatchToProps=dispatch=>{
    return{
        fetchData:()=>dispatch(getBoards())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

