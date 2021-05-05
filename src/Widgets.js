import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {


    const newsArticle = (heading, subtitle) => (

      <div className="widgets__article">

          <div className="widgets__articleLeft">

              <FiberManualRecordIcon />
          </div>
          <div className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </div>
      </div>

    )
    return (
        <div className="widgets">
            <div className='widgets__header'>

                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Rana Gohar", "Top news - 1,999 redaers" )}
            {newsArticle("Crona Virus Update", "Top news - 3.899 redaers" )}
            {newsArticle("  Bitcoin Brwaks $22k", "Top news - 2.340 redaers" )}
            {newsArticle("Rana Gohar", "Top news - 1,300 redaers" )}

            
        </div>
    )
}

export default Widgets
