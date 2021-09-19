const randomstring = require("randomstring");


// This function generates start and end date

const generateData = () => {
    let start = new Date();
    let end = new Date();
    let id = Math.floor(Math.random() * 99999) + 15426
    start.setHours(Math.floor(Math.random() * 24))    

    end.setHours(Math.floor(Math.random() * 24) + start.getHours())


    let data = {
        source_id: randomstring.generate(16)+"@example.com",
        params: {},
        categories: null,
        statis: 'CONFIRMED',
        dtstamp: start,
        start: start,
        end: end,
        created: null,
        lastModified: null,
        summary: randomstring.generate(16),
        description: null,
        location: randomstring.generate(8),
        class: null,
        uid: "meeting-"+randomstring.generate(5)+"@example.com",
        url: "https://api.example.com/meetings/"+randomstring.generate(8),
        visible: true,
        orgID: id,
    }
    console.log(data)
}

insert = function insert(source_id, params, categories, status, dtstamp, starts, ends, created, lastmodified, summary, description, location, clss, uid, url, orgId) {
    const insert = {
        text: 'INSERT INTO events(source_id, params, categories, status, dtstamp, starts, ends, created, lastmodified, summary, description, location, class, uid, url, org_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) ON CONFLICT ON CONSTRAINT events_source_id_key DO UPDATE SET source_id = $1, params = $2, categories = $3, status = $4, dtstamp = $5, starts = $6, ends = $7, created = $8, lastmodified = $9, summary = $10, description = $11, location = $12, class = $13, uid = $14, url = $15, orgID = $16',
        values: [source_id, params, categories, status, dtstamp, starts, ends, created, lastmodified, summary, description, location, clss, uid, url, orgId]
    }
    pool
      .query(insert)
      .then(res => {console.log('[', new Date().toLocaleString(), '] Inserted event:', insert.values[9])})
      .catch(err => console.error(err.stack))
}

generateData()