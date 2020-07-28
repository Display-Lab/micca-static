# MICCA Placeholder Site

A simple Jekyll theme for displaying placeholder website.

## Running locally
The `_config_dev.yml` values with override the base `_config.yml`
```sh
bundle exec jekyll s --config _config.yml,_config_dev.yml
```

## Build site
```sh
bundle exec jekyll b
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

#### Get external assets
The files under `assets/pdfs` tracked int this repo are placeholders.
The actual content is stored in Google Drive.
The changes are not tracked by use of `git update-index --assume-unchanged assets/pdf/*`.

Retrieve actual content and overwrite placeholders before updating S3 storage.

#### Push to S3 storage.
The static site is backed by an S3 bucket.  Updating the files there will update the site distribution.

```sh
aws s3 cp --recursive _site/ s3://${S3BUCKET}
```

## Based on Odin Knowledge Base

Odin is a Jekyll template for knowledgebases and support sites. Please see the [official Jekyll docs](https://jekyllrb.com/docs/) for more info on running, building and editing a Jekyll site.
