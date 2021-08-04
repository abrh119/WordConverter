import React from 'react'
import "./Definitions.css";

const Definitions = ( { word, catergory, meanings }) => {
    return ( 
    <div className="meanings">

        {
            meanings[0] && word && catergory === 'en' && (
                <audio 
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                style={{backgroundColor: 'white', borderRadius: 10}}
                controls
                >
                    Upgrade Your Damn Browser For Audio Support!
                </audio>
            )
        }
        
        {word === "" ?  (
            <span className="subtitles">Shoot A Word In The Search Weirdo</span>
            ) : (

                meanings.map((mean) => 
                    mean.meanings.map((item) =>
                        item.definitions.map((def) => (
                            <div className="singlemean">

                                <b>{def.definition}</b>
                                <hr style={{backgroundColor: "black", width:"100%"}} />
                                {
                                    def.example && (
                                        <span>
                                            <b>Example : </b> {def.example}
                                        </span>
                                    )}
                                {
                                   def.synonyms && (
                                    <span>
                                    <b>Synonyms : </b> {def.synonyms.map((s) =>`${s}, `)}
                                    </span>
                                   ) 
                                }

                            </div>
                        ))

                    ) )
                    )

              }
        
        </div>
    );
};

export default Definitions;
