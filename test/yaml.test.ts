import 'mocha';
import * as YAML from 'yaml';
import * as fs from 'fs';

describe('yaml_test', () => {
    it('should parse', () => {
        const yaml = fs.readFileSync('test/yaml.test.yaml', 'utf8');
        const doc = YAML.parse(yaml);
        console.log(doc);
        console.log(typeof doc.config.env);
        console.log(doc.config.env instanceof Object);
        console.log(new Map(Object.entries(doc.config.env)));
        const map = new Map(Object.entries(doc.config.env));
        console.log(Object.fromEntries(map));
    });
});