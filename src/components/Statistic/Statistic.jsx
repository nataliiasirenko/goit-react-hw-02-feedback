import React from "react";

export const Statistic = ({ good, neutral, bad, total, positiveFeedback}) => {
    return (<ul>
        <li option = "good"> Good : {good}</li>
        <li option = "neutral"> Neutral : {neutral}</li>
        <li option = "bad"> Bad : {bad}</li>
        <li>Total : {total}</li>
        <li>Positive feedback : {positiveFeedback} %</li>
        
    </ul>

    ) 
    }
