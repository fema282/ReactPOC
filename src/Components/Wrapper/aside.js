import React from "react";
import notes from "../../Sources/images/patchnotes.jpg";

function ASide(){

    return(
        <aside>
                <section>
                    <h4>New Patch Notes</h4>
                    <img width="100%" src={notes} alt="notes"></img>
                </section>
                <section>
                    <h4>Bugfixes </h4>
                    <div>
                        <div>
                            <div>
                                <ul>
                                    <li>Fixed a bug where Swain's old ability descriptions were displaying in the Champion Details Page
                                    </li>

                                    <li>Fixed a bug where Swain could reactivate his <strong>E - Never More</strong> to pull enemies closer to him even if they had cleansed the Root effect
                                    </li>

                                    <li>Fixed a bug where Chaos (Red) side inhibitors would display blue icons when selected
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
	                </div>
                </section>
            </aside>

    )
}

export default ASide;