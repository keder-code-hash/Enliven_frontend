function Alert() {
    return (
        <div className="alert alert-dismissible fade show" role="alert" style={{
            position: "relative",
            top: "4.7rem",
            zIndex: "500",
            backgroundColor: "#f2ed67",
            fontSize: "12px"
        }}>
            <strong>Computer Science</strong> assessment is live now!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alert;