import React from 'react'
export default function ContactMailTemplate({ email, name, message }) {
  return (
    <pre>
      <dl>
        <dt>Message from :</dt>
        <dd>{name} | {email}</dd>
        <dt>Message :</dt>
        <dd>{message}</dd>
      </dl>
    </pre>
  )
}