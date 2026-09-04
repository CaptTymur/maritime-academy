(() => {
    const certificateId = document.body.dataset.certificateId;
    const record = window.CERTIFICATE_RECORDS?.[certificateId];

    if (!record) {
        document.title = "Сертификат не найден | Мореходные классы";
        document.body.innerHTML = `
            <main class="shell lookup">
                <p class="eyebrow">Внутренний реестр · Internal registry</p>
                <h1>Запись не найдена</h1>
                <p class="lookup-lead">Проверьте номер сертификата и повторите поиск.</p>
                <a class="back-link" href="/certificates/">Вернуться к проверке</a>
            </main>`;
        return;
    }

    const publicUrl = `https://academy.capt-tymur.com/certificates/${certificateId}/`;
    document.title = `${certificateId} — ${record.holder} | Проверка сертификата`;

    const description = document.createElement("meta");
    description.name = "description";
    description.content = `Действующая реестровая запись сертификата ${certificateId}. Получатель: ${record.holder}.`;
    document.head.appendChild(description);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex,follow";
    document.head.appendChild(robots);

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = publicUrl;
    document.head.appendChild(canonical);

    document.body.innerHTML = `
        <header class="site-header">
            <div class="shell">
                <a class="brand" href="/">
                    <span class="brand-mark" aria-hidden="true">
                        <svg viewBox="0 0 32 32" fill="none">
                            <path d="M16 3v20M11 8h10M8 18c1.5 6 5.3 9 8 9s6.5-3 8-9M8 18l4 1M24 18l-4 1" stroke="#102f59" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="16" cy="5" r="2" stroke="#102f59" stroke-width="2"/>
                        </svg>
                    </span>
                    <span>
                        <strong>МОРЕХОДНЫЕ КЛАССЫ</strong>
                        <small>Maritime Classes · Professional Development</small>
                    </span>
                </a>
                <a class="back-link" href="/certificates/">Проверить другой сертификат</a>
            </div>
        </header>

        <main class="shell">
            <hr class="registry-rule">
            <div class="verification-layout">
                <article class="record-card">
                    <div class="status"><span class="status-dot">✓</span> Запись действительна</div>
                    <p class="eyebrow">Сертификат о прохождении программы</p>
                    <h1>${record.holder}</h1>
                    <p class="certificate-number">№ ${certificateId}</p>

                    <p class="program-name">«${record.programme}»</p>

                    <dl class="facts">
                        <div class="fact">
                            <dt>Идентификатор слушателя</dt>
                            <dd>${record.learnerId}</dd>
                        </div>
                        <div class="fact">
                            <dt>Группа</dt>
                            <dd>${record.group}</dd>
                        </div>
                        <div class="fact">
                            <dt>Формат</dt>
                            <dd>${record.format}</dd>
                        </div>
                        <div class="fact">
                            <dt>Объём</dt>
                            <dd>${record.volume}</dd>
                        </div>
                        <div class="fact">
                            <dt>Период обучения</dt>
                            <dd>${record.period}</dd>
                        </div>
                        <div class="fact">
                            <dt>Дата выдачи</dt>
                            <dd>${record.issueDate}</dd>
                        </div>
                        <div class="fact">
                            <dt>Руководитель программы</dt>
                            <dd>Тимур Рудов</dd>
                        </div>
                    </dl>

                    <p class="scope-note">Запись подтверждает прохождение авторской образовательной программы. Сертификат не является дипломом, свидетельством STCW или документом о присвоении морской квалификации.</p>
                </article>

                <aside class="side-stack" aria-label="Реестровые данные">
                    <section class="registry-card">
                        <p class="registry-label">Verification key</p>
                        <code class="key">${record.verificationKey}</code>
                        <h2>Контрольный отпечаток записи</h2>
                        <div class="hash">${record.verificationSha256}</div>
                    </section>

                    <section class="registry-card">
                        <p class="registry-label">Состояние записи</p>
                        <h2>Выдан · действителен</h2>
                        <p>Номер сертификата и контрольный отпечаток совпадают с внутренним реестром Мореходных классов.</p>
                        <p>Запись опубликована ${record.publicationDate || "19 июля 2026 года"}.</p>
                    </section>

                    <section class="registry-card">
                        <p class="registry-label">Проверка</p>
                        <p>Если имя, номер или контрольный ключ на предъявленном документе отличаются от данных этой страницы, документ не соответствует реестровой записи.</p>
                    </section>
                </aside>
            </div>
        </main>

        <footer class="site-footer">
            <div class="shell">
                <span>© 2026 Captain Tymur’s Maritime Academy</span>
                <span>Internal registry · First issue</span>
            </div>
        </footer>`;
})();
