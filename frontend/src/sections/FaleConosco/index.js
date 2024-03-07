import React from "react"
function FaleConosco() {
  const contatoData = [
    {
      title: "Nome",
      element: "input"
    },
    {
      title: "Email",
      element: "input"
    },
    {
      title: "Mensagem",
      element: "textarea"
    }
  ]
  return (
    <form>
      <ul>
        {contatoData.map((item, i) => (
          <li>
            {React.createElement(item.element)}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default FaleConosco