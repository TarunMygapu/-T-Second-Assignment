import React from 'react';
import './MainScreen.css'; // Assuming you have a CSS file for styling

const MainScreen = () => {
    return (
        <main>
            <div className="whole_container">
                <div className="left_container">
                    <div className="top_buttons">
                        <button className="studen_data_button">Student Data</button>
                        <button className="fee_payments_button">Fee Payments</button>
                        <button className="fee_adjustments_button">Fee Adjustments</button>
                    </div>
                    <div className="fee_adjustments_container">
                        <div className="fee_adjustments_container_header">
                            <div>
                                <h2>Fee Adjustments</h2>
                                <p>Handle fee modifications, concessions, installments, refunds, and other financial adjustments.</p>
                            </div>
                            <button className="history_button">History</button>
                        </div>
                        <div className="nav-buttons">
                            <button className="nav-btn active">Payments</button>
                            <button className="nav-btn">Cancellation</button>
                            <button className="nav-btn">Concession</button>
                            <button className="nav-btn">PM Issues</button>
                            <button className="nav-btn">Fee Installments</button>
                            <button className="nav-btn">Refunds</button>
                            <button className="nav-btn">Books-Reversal</button>
                        </div>
                    </div>
                </div>
                <div className="right_container">
                    </div>
            </div>
        </main>
    )
};

export default MainScreen;