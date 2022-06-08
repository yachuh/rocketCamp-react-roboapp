import React from "react";
import Card from "./Card";
import "./cardList.css";

const CardList = ( { robots } ) => {
    // const cardArray = robots.forEach( robot => {
    //      <Card id={robot.id} name={robot.name} email={robot.email} />
    // });
    return(
        <div className="cardList">
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );
                })
            }
        </div>
	);
}

export default CardList;