import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps{
    className ? : string;
    value? : string;
    onChange? : (value: string) => void;
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type,
    } = props;

    const onChangehandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangehandler}
                className={className}

            />
        </div>
    );
});
