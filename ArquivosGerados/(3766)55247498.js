    const Pool = require('pg').Pool&#xD;&#xA;    const pool = new Pool({&#xD;&#xA;      user: 'user',&#xD;&#xA;      host: 'localhost',&#xD;&#xA;      database: 'database',&#xD;&#xA;      password: 'password',&#xD;&#xA;      port: 5432,&#xD;&#xA;    });&#xD;&#xA;    const tableThree = (request, response) => {&#xD;&#xA;        pool.query('SELECT * FROM t3_0 ORDER BY time DESC LIMIT 10', (error, results) => {&#xD;&#xA;          if (error) {&#xD;&#xA;            throw error&#xD;&#xA;          }&#xD;&#xA;          response.status(200).json(results.rows)&#xD;&#xA;        })&#xD;&#xA;      }&#xD;&#xA;      module.exports = {&#xD;&#xA;        tableThree,&#xD;&#xA;      }