import "./card.css" 
export default function Price({old, newp}) {
    return <div className="sub">
        <span style = {{textDecoration : "line-through"}}>₹{old}</span>
        <span>₹{newp}</span>
    </div>
}