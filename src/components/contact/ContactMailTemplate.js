import React from 'react'
export function ContactMailTemplate({ email, fullName, message }) {
  return (
    <pre>
      <dl>
        <dt>Message from :</dt>
        <dd>{fullName} | {email}</dd>
        <dt>Message :</dt>
        <dd>{message}</dd>
      </dl>
    </pre>
  )
}