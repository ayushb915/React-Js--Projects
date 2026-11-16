export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{backgroundColor:color}}>
    <img className="mood-board-image" src={image}></img>
    <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}
export function MoodBoard(){
  return(
    <div className="mood-board">
    <h1 className="mood-board-heading">Destination Mood Board</h1>
    <MoodBoardItem
    color="yellow"
    image="https://picsum.photos/id/10/200/150"
    description="Forest"
    />
    <MoodBoardItem
    color="blue"
    image="https://picsum.photos/id/20/200/150"
    description="desk"
    />
    <MoodBoardItem
    color="pink"
    image="https://picsum.photos/id/30/200/150"
    description="mug"
    />
    </div>
    
  );
  }