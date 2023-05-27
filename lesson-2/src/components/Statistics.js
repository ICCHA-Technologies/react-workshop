function Statistics({ totalUsers, averageAge }) { // Child Component
    return(
      <div>
        <h3>
          Statistics
        </h3>
        <p>Total Users: {totalUsers}</p>
        <p>Average Age: {averageAge}</p>
      </div>
    )
}

export default Statistics
