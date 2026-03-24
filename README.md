# Personal-website
Personal website of Chandrakant Singh

## Scholar metrics automation

The publications page reads citation metrics from `data/scholar-metrics.json`.

To keep that file updated automatically, add a repository secret named `SERPAPI_KEY` in GitHub. The workflow in `.github/workflows/update-scholar-metrics.yml` runs once a day and can also be triggered manually from the Actions tab.
