<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
<?php foreach ($items as $delta => $item): ?>
<a class="btn btn-primary" href="<?php print render($item); ?>"><i class="fa fa-external-link"></i> <?php print t('LAUNCH PROJECT');?></a>
<?php endforeach; ?>
</div>