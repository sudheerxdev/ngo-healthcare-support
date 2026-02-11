function Dashboard({ requests }) {
    return (
        <div className="card">
            <h2>Submitted Requests</h2>

            {requests.length === 0 && <p>No requests yet.</p>}

            {requests.map((req, index) => (
                <div key={index} className="request">
                    <h4>{req.name}</h4>

                    <p>
                        <strong>Urgency:</strong>
                        <span className={`badge ${req.urgency}`}>
                            {req.urgency}
                        </span>
                    </p>

                    <p>{req.summary}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
