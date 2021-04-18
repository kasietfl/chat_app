import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import { Input } from 'antd';
import { Picker } from "emoji-mart";

import {SmileOutlined,
        SendOutlined,
        CameraOutlined } from '@ant-design/icons';

import './ChatInput.scss';

const ChatInput = props => {
    const {
        emojiPickerVisible,
        value,
        addEmoji,
        setValue,
        toggleEmojiPicker,
    } = props;

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <div className="chat-input__emoji-picker">
                    {emojiPickerVisible && (
                        <Picker onSelect={emojiTag => addEmoji(emojiTag)} set="apple" />
                    )} 
                </div>
                <SmileOutlined onClick={toggleEmojiPicker}/>
            </div>
            
            <Input onChange={e => setValue(e.target.value)} 
            size="large" placeholder="Write a message ..."/>
            <div className="chat-input__actions">
                <SendOutlined />
                <CameraOutlined />
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: propTypes.string
};

export default ChatInput;