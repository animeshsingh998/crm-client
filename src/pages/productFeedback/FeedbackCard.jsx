import './feedbackCard.css';

const FeedbackCard = ({feedback}) => {
  return (
    <div className="feedbackCard">
      <div className="feedUserInfo">
        <div className="feedCardData eeeee">
          <h1>User Name:</h1>
          <h2>{feedback.userId.email.split("@")[0]}</h2>
        </div>
      </div>
      <div className="feedbackInfo">
        <div className="feedCardData">
          <h1>Feedback:</h1>
          <h2>{feedback.feedback}</h2>
        </div>
        <div className="feedCardData eeeee">
          <h1>Experience:</h1>
          <h2>{feedback.experience}</h2>
        </div>
        <div className="feedCardData eeeee">
          <h1>Rating:</h1>
          <h2>{feedback.rating}</h2>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard