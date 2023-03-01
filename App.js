
import React from 'react'
import Header from './Components/Header'
import TravelCard from './Components/TravelCard'
import data from './data'
export default function App() {
    
    const cards = data.map(card => {
        if(data.indexOf(card) !== data.length -1){
            return (
                <div key={card.id}>
                    <TravelCard 
                    key={card.id}
                    items={card}
                    />
                    <hr/>
                </div>
                )
            } else {
                return (
                    <div key={card.id}>
                        <TravelCard 
                        key={card.id}
                        items={card}
                        />
                    </div>
                    )
                }
    })
    
    return (
        <main>
            <Header /> 
            <section className="card-section"> 
                         
                {cards}
                
            </section>
        
        </main>
    )
}