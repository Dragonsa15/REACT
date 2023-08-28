export default function Filter({filterEvent}) {
    return <input type="text" 
    onChange={(evt) => filterEvent(evt.target.value)}
    placeholder="search by name" />
}
