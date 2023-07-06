---
layout:     post
title:      "MacOS-Jekyll安装调试"
subtitle:   "ruby、jekyll"
date:       2000-01-02
author:     "author"
header-img: "img/post-bg-js-version.jpg"
tags:
    - jekyll
---

# MacOS-Jekyll安装
[链接](https://www.jekyll.com.cn/docs/)

## 一、基本安装命令
```ruby
gem install jekyll bundler
jekyll new myblog
cd myblog
bundle exec jekyll serve
```

# 二、问题及解决方案
## 执行：`gem install jekyll bundler`时的错误
```
larrymacpro@LMP ~ % gem install jekyll
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```

## 若是强制执行：`sudo gem install jekyll bundler`，则报错：
```ruby
ERROR:  Error installing jekyll:
	The last version of rouge (>= 3.0, < 5.0) to support your Ruby & RubyGems was 3.30.0. Try installing it with `gem install rouge -v 3.30.0` and then running the current command again
	rouge requires Ruby version >= 2.7. The current ruby version is 2.6.10.210.
```

## 系统的ruby，建议不要sudo操作，这会破坏系统的访问权限。
继续执行`gem install jekyll`则报如下错误

错误：
```ruby
gem install jekyll        
Fetching mercenary-0.4.0.gem
#<Thread:0x00007fa4ebbf4fe0@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/mercenary-0.4.0.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching rouge-4.1.3.gem
#<Thread:0x00007fa4ebbf5440@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/rouge-4.1.3.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching kramdown-parser-gfm-1.1.0.gem
#<Thread:0x00007fa4ebbf50f8@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/kramdown-parser-gfm-1.1.0.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching liquid-4.0.4.gem
#<Thread:0x00007fa4ebbf5558@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/liquid-4.0.4.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching kramdown-2.4.0.gem
#<Thread:0x00007fa4ebbf5670@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/kramdown-2.4.0.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching pathutil-0.16.2.gem
#<Thread:0x00007fa4ebbf5210@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/pathutil-0.16.2.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching forwardable-extended-2.6.0.gem
#<Thread:0x00007fa4ebbf5328@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/forwardable-extended-2.6.0.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
Fetching rb-inotify-0.10.1.gem
#<Thread:0x00007fa4ebbf57d8@/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:168 run> terminated with exception (report_on_exception is true):
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `initialize': Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/rb-inotify-0.10.1.gem (Errno::EACCES)
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `open'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:876:in `write_binary'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:305:in `cache_update_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/remote_fetcher.rb:158:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/source.rb:206:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/resolver/specification.rb:101:in `download'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/request_set.rb:174:in `block (2 levels) in install'
ERROR:  While executing gem ... (Errno::EACCES)
    Permission denied @ rb_sysopen - /Users/larry/.gem/ruby/2.6.0/cache/rb-inotify-0.10.1.gem
```

解决：
`You broke access to the gems on your system. sudo chown -R $(whoami) ~/.gem should probably restore it.`

# 三、因此需要再安装一个独立的ruby
安装ruby
```
brew install ruby
```

打开.zshrc
```
vim ~/.zshrc
```

追加
```
export PATH="/usr/local/opt/ruby/bin:$PATH" #   独立ruby路径
export PATH="/usr/local/lib/ruby/gems/3.2.0/gems/jekyll-4.3.2/exe:$PATH"    # jekyll路径
```

使shell生效
```
source ~/.zshrc
```

# 四、继续执行“一”命令，安装jekyll即可
