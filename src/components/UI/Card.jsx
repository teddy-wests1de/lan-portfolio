import styled from "styled-components";

const StyledCard = styled.div`
  background: var(--card-dark);
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  border: 1px solid #4a4b50;
`;

function Card() {
  return (
    <StyledCard>
      <div class="project-card">
        <div class="project-img">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="project-content">
          <h4>Corporate Dashboard</h4>
          <p>
            React-based analytics dashboard with real-time data visualization
          </p>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
