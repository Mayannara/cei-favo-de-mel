import React, { ChangeEvent, useState, FormEvent, useCallback } from 'react'

import * as S from '.styles'

import theme from '../../../../styles/theme'
import useDebouncedEffect from '../../../hooks/useDebouncedEffect'
import inputMask, { MaskTypes } from '../../../utils/inputMasks'
import { replaceInputValue } from '../../../utils/quoteHelper'

export type TInput = {
  className?: string
  required?: boolean
  label?: string
  name: string
  placeholder?: string
  isValid?: boolean
  errorMessage?: string | null
  isTextArea?: boolean
  pattern?: string
  value?: number | string
  onBlur?: (
    value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onChangeDebounced?: (e: ChangeEvent<HTMLInputElement>) => void
  maskType?: MaskTypes
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime'
    | 'datetime-local'
    | 'month'
    | 'password'
    | 'url'
    | 'tel'
    | 'file'
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<TInput> = ({
  className,
  label,
  name,
  placeholder,
  isValid,
  errorMessage,
  isTextArea,
  pattern,
  required,
  onChange,
  onChangeDebounced,
  type,
  maskType,
  ...extraProps
}) => {
  const [fileName, setFileName] = useState<string | null>(null)
  const [internalValue, setInternalValue] = useState(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (type === 'file' && e.target?.files?.[0]) {
      setFileName(e.target?.files?.[0]?.name)
    }

    if (onChange) onChange(e)
    if (onChangeDebounced) setInternalValue(e.target.value)
  }

  useDebouncedEffect(
    () => {
      if (onChangeDebounced && internalValue) {
        onChangeDebounced({ target: { value: internalValue, name } })
      }
    },
    [internalValue],
    700
  )

  const handleMask = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (maskType) {
        const mask = inputMask[maskType]
        e.currentTarget.value = mask(e)
      }
    },
    [maskType]
  )

  const getValue = () => {
    extraProps.value
  }

  return (
    <S.Wrapper className={className} isFileInput={type === 'file'}>
      <S.InputContainer>
        {label && <S.Label>{label}</S.Label>}
        {isTextArea ? (
          <S.Textarea
            name={name}
            placeholder={placeholder}
            isValid={isValid}
            required={required}
            onChange={onChange}
            {...extraProps}
          />
        ) : (
          <S.Input
            pattern={pattern}
            name={name}
            placeholder={placeholder}
            isValid={isValid}
            required={required}
            onChange={handleChange}
            hasError={!!errorMessage}
            onInput={handleMask}
            type={type}
            maskType={maskType}
            {...extraProps}
            value={getValue()}
          />
        )}
        {isValid !== null && isValid !== undefined && (
          <S.Icon
            icon={isValid ? EIcons.CheckLine : EIcons.CloseCircle}
            color={isValid ? theme.colors.success : theme.colors.error}
          />
        )}
        {type === 'file' && (
          <>
            <S.Icon icon={EIcons.UploadCloud} />
            {fileName || placeholder}
          </>
        )}
      </S.InputContainer>
      {errorMessage && (
        <S.errorMessage id='error'>{errorMessage}</S.errorMessage>
      )}
    </S.Wrapper>
  )
}
