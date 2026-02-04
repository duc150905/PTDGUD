import { useState } from "react"
import './Form.css'
function Form() {
    const [show, setShow] = useState(null)
    return (
        <div className="overplay">
            <div className="form-login fade-in">
                <button className="btn-close" onClick={() => setShow(false)} >x</button>
                <h2 className="title">Login form</h2>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className="btn-login">Login</button>
            </div>
        </div>
    )
}

export default Form