// import './Users.css'
export default function User({user}){
  const {name,email,phone} =user;
        
    return(
        <div className="box">
            <h3>name: {name}</h3>
            <p>Email: {email} </p>
            <p>Phoen: {phone}</p>
        </div>
    )
}