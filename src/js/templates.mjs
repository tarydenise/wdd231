export function parkInfoTemplate(info) {
    return `
        <a href="/" class="hero-banner_title">${info.fullName}</a>
        <p class="hero-banner_subtitle">
            <span>${info.designation}</span>
            <span>${info.states}</span>
        </p>`;
}

export function mediaCardTemplate(info) {
    return `
        <div class="media-card">
            <a href="${info.link}">
                <img src="${info.image}" alt="${info.name}" class="media-card__img">
                <h3 class="media-card__title">${info.name}</h3>
            </a>
            <p>${info.description}</p>
        </div>`;
}

export function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

export function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `
        <section class="contact">
            <h3>Contact Info</h3>
            <h4>Mailing Address:</h4>
            <p>${mailing.line1}</p>
            <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
            <h4>Phone:</h4>
            <p>${voice}</p>
        </section>`;
}
