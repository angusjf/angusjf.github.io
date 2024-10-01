async function viewTransitions(incoming, e) {
  if (e.viewTransition) {
    const from = new URL(navigation.activation.from.url);
    const to = new URL(navigation.activation.entry.url);

    if (from.hostname != "angusjf.com" || to.hostname != "angusjf.com") return;

    const h2 = document
      .querySelector(`.card h2 a[href$='${from.pathname.replace(/\/$/, "")}']`)
      ?.closest("h2");
    h2.style.viewTransitionName = "title";

    let card = h2.closest(".card");
    card.style.viewTransitionName = "article";

    let img = card.querySelector("img");
    img.style.viewTransitionName = "hero";

    await (incoming ? e.viewTransition.ready : e.viewTransition.finished);

    h2.style.viewTransitionName = "none";
    card.style.viewTransitionName = "none";
    img.style.viewTransitionName = "none";
  }
}

window.addEventListener("pageswap", (e) => viewTransitions(false, e));
window.addEventListener("pagereveal", (e) => viewTransitions(true, e));
