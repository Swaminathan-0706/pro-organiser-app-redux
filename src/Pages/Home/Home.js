import React, { Component } from 'react';
import styles from './Home.module.scss';
import {connect} from 'react-redux';
import {getBoards} from '../../Redux/Actions/ActionCreatorHome';
import { Link } from "react-router-dom";
import Loader from '../Modals/Loader/Loader';


 class Home extends Component {     
        
        
     componentDidMount(){
         
         this.props.fetchData();
         console.log(this.props);
        
     }

    render() {
        
        return (
            <>
      {this.props.loading ? (
        <Loader />
      ) : (
        <>
          <p className={styles.para}>Boards</p>
          {this.props.boardData=== null&& (
            <p className={styles.emptyMsg}>
              You haven't created any boards.Kindly click on the 'Create Board'
              button in the navigation bar to create a board.
            </p>
          )}

          <div className={styles.ctrBoard}>
            {this.props.boardData.map((x) => (
              <Link
                className={styles.btnBoard}
                to={{
                  pathname: `/board/${x.id}`,
                  state: {
                    id: x.id,
                    boardName: x.boardName,
                    teamMembers: x.boardMembers,
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
        boardData:state.HomeReducer.boardData,
        loading:state.HomeReducer.loading
    };

}
const mapDispatchToProps=dispatch=>{
    return{
        fetchData:()=>dispatch(getBoards())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

