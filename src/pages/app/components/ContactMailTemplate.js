import React from 'react'
export const ContactMailTemplate = ({ email, name, message }) => (
  <pre>
    <dl>
      <dt>Message from :</dt>
      <dd>{name} | {email}</dd>
      <dt>Message :</dt>
      <dd>{message}</dd>
    </dl>
  </pre>
)