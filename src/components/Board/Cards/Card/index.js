import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-smooth-dnd";

const CardContainer = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`;

const CardContent = styled.div``;

const Card = ({ card, onUpdateCardText }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(card.title);

    const handleTextChange = (newText) => {
        setEditedText(newText);
        onUpdateCardText(card.id, newText);
    };

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
    };

    return (
        <Draggable key={card.id}>
            <CardContainer className="card" onDoubleClick={handleDoubleClick}>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => handleTextChange(e.target.value)}
                        onBlur={handleBlur}
                        autoFocus
                    />
                ) : (
                    <CardContent>{editedText}</CardContent>
                )}
            </CardContainer>
        </Draggable>
    );
};

export default Card;