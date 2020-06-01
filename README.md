# MICCA Placeholder Site

A simple Jekyll theme for displaying placeholder website.

## Customize
To customise you just need to fill out the `_config.yml` yaml files `_data` directory with your own details.

## Build site
```sh
jekyll b
```
## Manual Deploy

### Create bucket and upload files

```sh
S3BUCKET=placeholder-bucket-name
aws s3 mb s3://${S3BUCKET}
```

### Create cloudfront distribution
- Create Origin Access Id for Cloudfront Distribution
- Policy to allow origin access id to bucket
- Add Origin for S3 to cloudfront dist

### Update S3 Bucket files.

```sh
aws s3 cp --recursive _site/${S3BUCKET}
```

