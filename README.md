# MICCA Placeholder Site

A simple Jekyll theme for displaying placeholder website.

## Customize
To customise you just need to fill out the `_config.yml` yaml files `_data` directory with your own details.

## Build site
```sh
jekyll b
```
## Manual Deploy
All but updating the bucket files should only have to be done once.

### Create bucket and upload files

```sh
S3BUCKET=placeholder-bucket-name
aws s3 mb s3://${S3BUCKET}
```
### Apply bucket policy to make files publicly accessible
See `_bucket_policy.json` for policy example in which bucket name needs to be replaced.
Use http://awspolicygen.s3.amazonaws.com/policygen.html to generate a policy file.
The `Id` and `Sid` are pretty much what need to be generated.


The policy is applied to the bucket using:
```sh
aws s3api put-bucket-policy --bucket ${S3BUCKET} --policy file://_bucket_policy.json
```

### Create cloudfront distribution
- Create Origin Access Id for Cloudfront Distribution
- Policy to allow origin access id to bucket
- Add Origin for S3 to cloudfront dist

### Update S3 Bucket files.

```sh
aws s3 cp --recursive _site/ s3://${S3BUCKET}
```
