import React, { useState, useRef, useEffect } from "react";
import './index.scss';
import showIconDefault from './assets/eye.png'
import closeIconDefault from './assets/close-eye.png'

// 保存光标位置
let selectionStart = 0,
    selectionEnd = 0

const EncryptedInput = ({
    initValue = '', // 初始值
    front = 0,
    end = 0,
    showIcon = showIconDefault,
    closeIcon = closeIconDefault,
    style = {}
}) => {
    // 显示小眼睛icon
    const [show, setShow] = useState(0)
    // 明文
    const [value, setValue] = useState('')
    // 脱敏后的字符
    const [mValue, setMValue] = useState('')
    // 获取input的节点
    const inputRef = useRef(null)
    // 更新value
    useEffect(() => {
        if (initValue) {
            setValue(initValue)
            handleFormat(initValue)
        }
    }, [initValue])
    // 设置input值
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = show ? value : mValue
            // 还原光标位置，因为重新设置值后，页面刷新会导致光标回到最末尾的位置
            inputRef.current.setSelectionRange(selectionStart, selectionEnd)
        }
    }, [show, value, mValue])
    // 脱敏处理
    const handleFormat = value => {
        if (!value) {
            setMValue('')
            return
        }
        let str = ''
        const len = value.length
        const star = Math.max(0, len - (Number(front) + Number(end)))
        if (len <= (Number(front) + Number(end))) {
            str = value
        } else {
            str = value.slice(0, Number(front)) + '*'.repeat(star) + value.slice(Number(front) + star)
        }
        setMValue(str)
        return str
    }

    const handleChange = e => {
        if (inputRef.current.cnIputFlag) return
        // 获取光标
        selectionStart = e.target.selectionStart
        selectionEnd = e.target.selectionEnd
        // 光标位置
        const ind = selectionStart - 1
        let actualVal = value || ''
        let currentVal = e.target.value
        const isAdd = currentVal.length > actualVal.length
        const num = Math.abs(currentVal.length - actualVal.length)
        if (isAdd) {
            actualVal =
                actualVal.slice(0, ind - num + 1) +
                currentVal.slice(ind - num + 1, ind + 1) +
                actualVal.slice(ind - num + 1)
        } else {
            actualVal = actualVal.slice(0, ind + 1) + actualVal.slice(ind + num + 1)
        }
        setValue(actualVal)
        handleFormat(actualVal)
    }
    // 主要为了校验是否在进行中文输入
    const composition = e => {
        if (e.type === 'compositionend') {
            inputRef.current.cnIputFlag = false
            handleChange(e)
        } else {
            inputRef.current.cnIputFlag = true
        }
    }
    return (
        <div className="react-encrypted-input-wrap">
            <input ref={inputRef} style={style?.input || {}}
                onChange={e => handleChange(e)}
                onCompositionStart={composition}
                onCompositionEnd={composition}
            />
            <img className="icon" src={show ? showIcon : closeIcon} onClick={() => setShow(show ^ 1)} style={style?.icon || {}} />
        </div>
    );
};
export default EncryptedInput;
