// Write your Character component here
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const StyledPanel = styled.div`
    &.panel-content{
        display:none;
    }
    &.toggle-on{
        display:block;
    }
`
const StyledButton = styled.button`
    &.hide-btn{
        display:none;
    }
`
const Span = styled.span`
    font-weight: bold;
`
const Character = props => {
    const [isExpanded,setExpanded] = useState(false);
    const toggleClass = () => {
        setExpanded(!isExpanded);
    };
    return(
        <div className="panel">
            <div className="panel-bar">
                <h3>{props.name}</h3>
                <div className="panel-buttons">
                    <StyledButton className={`panel-btn ${isExpanded ? "hide-btn" : ""}`} 
                        onClick={toggleClass} >
                            {props.open}
                    </StyledButton>
                    <StyledButton className={`panel-btn ${isExpanded ? "" : "hide-btn"}`} 
                        onClick={toggleClass} >
                            {props.close}
                    </StyledButton>
                </div>
                <StyledPanel className={`panel-content ${isExpanded ? "toggle-on" : ""}`}>
                    <p>  
                        <Span>Birth Year:</Span> {props.character.birth_year}<br />
                        <Span>Eye Color:</Span> {props.character.eye_color}<br />
                        <Span>Mass:</Span> {props.character.mass}<br />
                    </p>
                </StyledPanel>
            </div>
        </div>
    );
};
export default Character;