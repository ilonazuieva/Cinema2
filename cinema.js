function movie(card, ticket, perc) {
    let sysA = 0;
    let sysB= card;
    let ticketB = ticket;
    let days = 0;
    while (Math.ceil(sysA) <= Math.ceil(sysB)) {
        sysA += ticket;
        ticketB *= perc;
        sysB +=ticketB;
        days++;
    }
    return days
}
//https://www.codewars.com/kata/562f91ff6a8b77dfe900006e
